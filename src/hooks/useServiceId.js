import { useCallback, useEffect, useState } from 'react'
import { db } from '../../database/firebase'

export const useServiceId = (id) => {
  const [service, setService] = useState()
  const [loading, setLoading] = useState(true)

  const getDocById = useCallback(async (id) => {
    const dbRef = db.collection('services').doc(id)
    const doc = await dbRef.get()
    const service = doc.data()
    const user = await service.user.get()
    const category = await service.category.get()
    service.user = user.data()
    service.category = category.data()
    service.category.id = category.id
    setLoading(false)
    setService(service)
  }, [id])

  useEffect(() => {
    getDocById(id)
  }, [id])

  return {
    service,
    loading
  }
}
