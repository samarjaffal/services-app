import { useCallback, useEffect, useState } from 'react'
import { db } from '../../database/firebase'

export const useServices = ({ categoryId, filterByName }) => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(false)

  const mapResults = useCallback(async (querySnapshot) => {
    const services = []

    for (const doc of querySnapshot.docs) {
      const service = doc.data()
      const user = await service.user.get()
      const category = await service.category.get()
      service.user = user.data()
      service.category = category.data()
      service.category.id = category.id
      service.id = doc.id
      services.push(service)
    }

    return services
  }, [])

  useEffect(() => {
    setLoading(true)
    db.collection('services').onSnapshot(async (querySnapshot) => {
      mapResults(querySnapshot).then((result) => {
        setLoading(false)
        if (categoryId) return filterServices(result)
        if (filterByName) return searchService(result)
        setServices(result)
      })
    })
  }, [categoryId])

  const filterServices = (services) => {
    const filteredServices = services.filter((service) => service.category.id === categoryId)
    setServices(filteredServices)
  }

  const searchService = (services) => {
    const filteredServices = services.filter((service) => service.name.toLowerCase().includes(filterByName.toLowerCase()))
    setServices(filteredServices)
  }

  return {
    services,
    loading
  }
}
