export const newServiceProvider = ({ service, emailTo }) => {
  const subject = `📢 Nueva solicitud de servicio para: ${service?.name}`
  return {
    to: emailTo,
    message: {
      subject: subject,
      text: '',
      html: `
        <p>Usted está recibiendo este correo ya que un usuario solicitó su información de contacto desde la app de ServicesApp, para un nuevo servicio de: <strong>${service.name}</strong>.</p>
        <p>⚠ Se sugiere que debe estar al pendiente en las próximas horas para responder a esta solicitud.</p>
        `
    }
  }
}
