const Mailgun = require('mailgun-js')

function MailSender (config) {
  if (!new.target) {
    return new MailSender(config)
  }

  _mailgun = new Mailgun({
    apiKey: config.apiKey,
    domain: config.domain
  })

  this.send = async (to, content) => {
    return _mailgun.messages()
      .send({
        from: 'example@gmail.com',
        to: to,
        subject: 'Feedmail RSS',
        text: '',
        html: content,
    })
  }
}

module.exports = MailSender
