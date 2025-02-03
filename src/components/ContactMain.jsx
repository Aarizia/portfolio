import './ContactMain.scss';

export default function ContactMain() {

    return (
        <main className="contact">
            <div className='contact__container'>
                <p className="contact__text">Contact me at</p>
                <span className='line-break'><address className="contact__address">hello@lindekilde.dev</address></span>
            </div>
        </main>
    )
}