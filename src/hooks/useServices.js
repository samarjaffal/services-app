import { useCallback, useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { db } from '../../database/firebase'

export const useServices = ({ categoryId, filterByName, selectedService }) => {
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
      service.user.id = user.id
      service.id = doc.id
      services.push(service)
    }

    return services
  }, [])

  useEffect(() => {
    async function prepare () {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync()
        setLoading(true)
        db.collection('services').onSnapshot(async (querySnapshot) => {
          mapResults(querySnapshot).then(async (result) => {
            setLoading(false)
            setServices(result)
            await SplashScreen.hideAsync()
          })
        })
      } catch (e) {
        console.warn(e)
      }
    }
    prepare()
  }, [categoryId])

  return {
    services,
    loading
  }
}
