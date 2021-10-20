export const newServiceClient = ({ service, emailTo }) => {
  const subject = `Información sobre el servicio de: ${service?.name}`
  return {
    to: emailTo,
    message: {
      subject: subject,
      text: '',
      html: `
        <h3>Datos de contacto</h3>
        <p><strong>Servicio:</strong> ${service.name}</p>
        <p><strong>Nombre y Apellido:</strong> ${service.user.name} ${service.user.lastName}</p>
        <p><strong>Email:</strong> ${service.user.email}</p>
        <p><strong>Teléfono:</strong> ${service.user.phone}</p>
      `
    }
  }
}
