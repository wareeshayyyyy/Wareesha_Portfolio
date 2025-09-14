const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Send email verification email
const sendVerificationEmail = async (email, token) => {
  try {
    const transporter = createTransporter();
    const verificationUrl = `${process.env.CLIENT_URL}/verify-email?token=${token}`;
    
    const mailOptions = {
      from: `"EduAssist Auth" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Verify Your Email Address',
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 28px;">📧 Verify Your Email</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">EduAssist Registration</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Welcome to EduAssist!</h2>
            <p style="color: #555; line-height: 1.6;">
              Thank you for registering with EduAssist. Please click the button below to verify your email address and activate your account.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${verificationUrl}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                ✅ Verify Email Address
              </a>
            </div>
            
            <p style="color: #666; font-size: 14px;">
              If the button doesn't work, copy and paste this link into your browser:<br>
              <a href="${verificationUrl}" style="color: #667eea; word-break: break-all;">${verificationUrl}</a>
            </p>
            
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 5px; padding: 15px; margin: 20px 0;">
              <p style="margin: 0; color: #856404;">
                ⚠️ This verification link expires in 24 hours. If you didn't create an account, please ignore this email.
              </p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">
            
            <p style="color: #999; font-size: 12px; text-align: center;">
              Need help? Contact us at support@eduassist.com<br>
              This is an automated message, please do not reply.
            </p>
          </div>
        </div>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✉️ Verification email sent successfully:', result.messageId);
    return true;
  } catch (error) {
    console.error('❌ Verification email sending failed:', error);
    return false;
  }
};

// Send password reset email
const sendPasswordResetEmail = async (email, token) => {
  try {
    const transporter = createTransporter();
    const resetUrl = `${process.env.CLIENT_URL}/reset-password?token=${token}`;
    
    const mailOptions = {
      from: `"EduAssist Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Reset Your Password',
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <div style="background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); padding: 30px; border-radius: 10px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 28px;">🔒 Password Reset</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">EduAssist Account Security</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Reset Your Password</h2>
            <p style="color: #555; line-height: 1.6;">
              We received a request to reset your password for your EduAssist account. Click the button below to create a new password.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetUrl}" style="background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                🔑 Reset Password
              </a>
            </div>
            
            <p style="color: #666; font-size: 14px;">
              If the button doesn't work, copy and paste this link into your browser:<br>
              <a href="${resetUrl}" style="color: #e74c3c; word-break: break-all;">${resetUrl}</a>
            </p>
            
            <div style="background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 5px; padding: 15px; margin: 20px 0;">
              <p style="margin: 0; color: #721c24;">
                🔐 This reset link expires in 1 hour for security reasons.<br>
                💡 If you didn't request this reset, please ignore this email or contact support.
              </p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">
            
            <p style="color: #999; font-size: 12px; text-align: center;">
              For your security, never share this link with others.<br>
              Need help? Contact us at support@eduassist.com
            </p>
          </div>
        </div>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✉️ Password reset email sent successfully:', result.messageId);
    return true;
  } catch (error) {
    console.error('❌ Password reset email sending failed:', error);
    return false;
  }
};

// Send OTP email (backward compatibility)
const sendOTPEmail = async (email, otp, name) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"EduAssist Auth" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Verify Your Email - OTP Code',
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 28px;">🔐 Email Verification</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">EduAssist Authentication</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Hello ${name}!</h2>
            <p style="color: #555; line-height: 1.6;">
              Welcome to EduAssist! Please use the verification code below to complete your registration:
            </p>
            
            <div style="background: white; border: 2px dashed #667eea; border-radius: 8px; padding: 20px; text-align: center; margin: 25px 0;">
              <h1 style="color: #667eea; font-size: 36px; margin: 0; letter-spacing: 5px; font-family: 'Courier New', monospace;">
                ${otp}
              </h1>
            </div>
            
            <p style="color: #888; font-size: 14px; text-align: center;">
              ⏰ This code expires in 10 minutes<br>
              🔒 Never share this code with anyone
            </p>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">
            
            <p style="color: #999; font-size: 12px; text-align: center;">
              If you didn't request this verification, please ignore this email.<br>
              This is an automated message, please do not reply.
            </p>
          </div>
        </div>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✉️ OTP email sent successfully:', result.messageId);
    return true;
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return false;
  }
};

// Send welcome email
const sendWelcomeEmail = async (email, name) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"EduAssist" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '🎉 Welcome to EduAssist!',
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <div style="background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%); padding: 30px; border-radius: 10px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 28px;">🎉 Welcome to EduAssist!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Your account is now active</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Hello ${name}!</h2>
            <p style="color: #555; line-height: 1.6;">
              🎊 Congratulations! Your email has been verified successfully and your EduAssist account is now active.
            </p>
            
            <div style="background: white; border-left: 4px solid #43cea2; padding: 20px; margin: 25px 0;">
              <h3 style="color: #43cea2; margin-top: 0;">✅ What's Next?</h3>
              <ul style="color: #555; line-height: 1.8;">
                <li>🔐 Your account is secure and ready to use</li>
                <li>📚 Access all EduAssist features</li>
                <li>🎯 Start your learning journey</li>
                <li>💬 Get support whenever you need</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.CLIENT_URL}/dashboard" style="background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                🚀 Start Learning
              </a>
            </div>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">
            
            <p style="color: #999; font-size: 12px; text-align: center;">
              Thank you for choosing EduAssist!<br>
              Need help? Contact us at support@eduassist.com<br>
              This is an automated message, please do not reply.
            </p>
          </div>
        </div>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✉️ Welcome email sent successfully:', result.messageId);
    return true;
  } catch (error) {
    console.error('❌ Welcome email sending failed:', error);
    return false;
  }
};

// Send notification email (general purpose)
const sendNotificationEmail = async (email, subject, title, message, actionUrl = null, actionText = null) => {
  try {
    const transporter = createTransporter();
    
    const actionButton = actionUrl && actionText ? `
      <div style="text-align: center; margin: 30px 0;">
        <a href="${actionUrl}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold;">
          ${actionText}
        </a>
      </div>
    ` : '';
    
    const mailOptions = {
      from: `"EduAssist" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: subject,
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 28px;">${title}</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">EduAssist Notification</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <div style="color: #555; line-height: 1.6;">
              ${message}
            </div>
            
            ${actionButton}
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">
            
            <p style="color: #999; font-size: 12px; text-align: center;">
              This is an automated notification from EduAssist.<br>
              Need help? Contact us at support@eduassist.com
            </p>
          </div>
        </div>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✉️ Notification email sent successfully:', result.messageId);
    return true;
  } catch (error) {
    console.error('❌ Notification email sending failed:', error);
    return false;
  }
};

// Export all functions
module.exports = {
  createTransporter,
  sendVerificationEmail,
  sendPasswordResetEmail,
  sendOTPEmail,
  sendWelcomeEmail,
  sendNotificationEmail
};