import { useCallback, useEffect, useState } from 'react'
import { db } from '../../database/firebase'

export const useCategoryId = (id) => {
  const [category, setCategory] = useState()
  const [loading, setLoading] = useState(true)

  const getDocById = useCallback(async (id) => {
    const dbRef = db.collection('categories').doc(id)
    const doc = await dbRef.get()
    const category = doc.data()
    console.log({ category })
    setLoading(false)
    setCategory(category)
  }, [id])

  useEffect(() => {
    getDocById(id)
  }, [id])

  return {
    category,
    loading
  }
}
