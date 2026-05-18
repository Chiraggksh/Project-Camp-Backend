import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://taskmanagerlink.com",
    },
  }); //default branding as well

  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
  const emailHtml = mailGenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "mail.taskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error("Email error! Check your credentials");
    console.error("Error: ", error);
  }
};

const emailVerificationContent = (username, verficationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App. We are excited to see you on board ;)",
      action: {
        instructions: "To get verified, please click here:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Verify your email",
          link: verficationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

const forgotPasswordContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to change your password.",
      action: {
        instructions: "To reset your password, please click here:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Change your password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

export { emailVerificationContent, forgotPasswordContent, sendEmail };
