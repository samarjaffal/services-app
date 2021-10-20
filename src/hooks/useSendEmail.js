import { useState } from 'react'
import { db } from '../../database/firebase'

export const useSendEmail = ({ emailData = {} }) => {
  const [loading, setLoading] = useState(false)

  const sendEmail = () => {
    setLoading(true)
    db.collection('mail').add(emailData).then(() => {
      setLoading(false)
      console.log('Queued email for delivery!')
    })
      .catch((error) => console.error('Error:', error))
  }

  return {
    loading,
    sendEmail
  }
}
