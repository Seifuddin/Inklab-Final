from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS

app = Flask(__name__)
CORS(app) #enable cors to allow requests from the react frontend

#Configure Flask-Mail
app.config['MAIL_SERVER'] = 'stmp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'nguruedwin@gmail.com' #replace with your email
app.config['MAIL_PASSWORD'] = '1234'

mail = Mail(app)

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()

    #Extracting the form data
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    message = data.get('message')

    #Prepare the email content
    email_subject = f"New Contact Form Submission from {name}"
    emailbody = f"""
    you have received a new message from your website cintact form:

    Name: {name}
    Email: {email}
    Phone: {phone}
    Message: {message}
    """
    #send the email
    try:
        msg = Message(subject=email_subject,
                      sender=app.config['MAIL_USERNAME'],
                      recipients=['nguruedwin46@gmail.com'], #target email
                      body=email_body)
        mail.send(msg)
        return jsonify({"message": "Message sent successfully!"}), 200
    except Exception as e:
        print(f"Failed to send email: {e}")
        return jsonify({"message": "Failed to send message"}), 500

if __name__=='__main__':
    app.run(debug=True, port=5000)