import { useCallback, useEffect, useState } from 'react'
import { db } from '../../database/firebase'

export const useCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  const mapResults = useCallback(async (querySnapshot) => {
    const data = []

    for (const doc of querySnapshot.docs) {
      const category = doc.data()
      category.id = doc.id
      data.push(category)
    }

    return data
  }, [])

  useEffect(() => {
    setLoading(true)
    db.collection('categories').onSnapshot(async (querySnapshot) => {
      mapResults(querySnapshot).then((result) => {
        setLoading(false)
        setCategories(result)
      })
    })
  }, [])

  return {
    categories,
    loading
  }
}
