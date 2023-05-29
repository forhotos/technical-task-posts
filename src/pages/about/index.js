import Header from "../../components/layout/header";
import './styles.css';
import { Card } from "react-bootstrap";

function AboutPage() {
    return (
        <>
            <Header/>
            <div className="p-4 p-md-5 about">
                <img
                    className='about-photo'
                    src='https://img.hhcdn.ru/photo/620167004.jpeg?t=1685478800&h=Sg5CzBt2AKBq_XRwB_XmYw'
                    alt='me'
                    height='300px'
                    width='225px'
                />
                <div>
                    <Card className='p-4 about-info'>
                        <div>
                            Меня зовут Алекей, мне 25 и я Frontend-разработчик.
                        </div>
                        <div>
                            Начинал свой путь в этой профессии в компании Netcracker со знакомства с Angular, позже
                            перешел на React.
                        </div>
                        <div>
                            Работал в коммерческой разработке, но имею опыт и в одиночных проектах.
                        </div>
                        <div>
                            Главным скиллом в профессии разработчика считаю Problem-Solving Skill.
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default AboutPage;