import util from '../styles/utils.module.css';

export default class Intro extends React.Component{
    render(){
        const intro =
            <div className={util.intro}>
                <div className={util.intro__text}>
                    <h2>С днем рождения, Лева <img src="/images/balloon.png" width='40px' height='40px' /></h2>
                    <a href='/#first'>
                        Go. Around. Flex.
                    </a>
                </div>
            </div>;

        return(intro)
    }
}