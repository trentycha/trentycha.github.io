import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [nameForm, setNameForm] = useState("");
    const [mailForm, setMailForm] = useState("");
    const [subjectForm, setSubjectForm] = useState("");
    const [messageForm, setMessageForm] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.send(
                'service_0otxgm4',
                'template_1v9w88b',
                {
                    name: nameForm,
                    mail: mailForm,
                    subject: subjectForm,
                    message: messageForm
                },
                '_VlrYq7tmJUqMf1qN'
            );

            alert('Message envoyé avec succès !');
            setNameForm("");
            setMailForm("");
            setSubjectForm("");
            setMessageForm("");

        } catch (error) {
            alert('Erreur lors de l\'envoi. Contactez-moi directement sur trentycharlene@gmail.com');
            console.error('Erreur EmailJS:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-orange-900 py-32">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-4">On échange ?</h1>
                    <p className="text-xl text-gray-200">N'hésitez pas à me contacter, je suis disponible !</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">

                    <div className="space-y-6">

                        <div className="bg-orange-500 rounded-2xl p-8 shadow-xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Disponibilités - 2026</h3>
                            <p className="text-lg">
                                Je suis disponible pour débuter un contrat dès septembre 2026.
                                Je suis ouverte aux propositions et disponible pour échanger. Je vous réponds en moins de 24h !
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Mes coordonnées</h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-center gap-6">
                                    <div className="text-4xl">
                                        <img src="/images/icons/phone.png" alt="Phone" className="w-10 h-10"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Téléphone</h3>
                                        <p className="text-orange-600">06 44 71 32 43</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="text-4xl">
                                        <img src="/images/icons/mail.png" alt="Mail" className="w-10 h-10"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Email</h3>
                                        <a href="mailto:trentycharlene@gmail.com" className="text-orange-600 hover:underline">
                                            trentycharlene@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="text-4xl">
                                        <img src="/images/icons/zoom.png" alt="GitHub" className="w-10 h-10"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">GitHub</h3>
                                        <a href="https://github.com/trentycha" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                                            github.com/trentycha
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="text-4xl">
                                        <img src="/images/icons/linkedin.png" alt="LinkedIn" className="w-10 h-10"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                                        <a href="https://www.linkedin.com/in/charlène-billat" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                                            Mon profil LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-moi un message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Nom</label>
                                <input 
                                    type="text"
                                    value={nameForm}
                                    onChange={(e) => setNameForm(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Nom et prénom"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input 
                                    type="email"
                                    value={mailForm}
                                    onChange={(e) => setMailForm(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="votre@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Sujet</label>
                                <input 
                                    type="text"
                                    value={subjectForm}
                                    onChange={(e) => setSubjectForm(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Sujet du message"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea 
                                    name="message"
                                    value={messageForm}
                                    onChange={(e) => setMessageForm(e.target.value)}
                                    required
                                    rows="3"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Votre message..."
                                />
                            </div>

                            <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                                Envoyer !
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;