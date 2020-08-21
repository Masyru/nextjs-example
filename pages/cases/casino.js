import React from "react";
import jquery from "jquery"

const $ = jquery

class Case extends React.Component{
    constructor(props) {
        super(props);
    }

    startRoll(){
        $(document).ready(function() {
            var tMax = 4000, // animation time, ms
                height = 700,
                speeds = [],
                r = [],
                target = 11111,
                reading = 11111,
                sTarget = target.toString(),
                sReading = reading.toString(),
                numberOutput = [],
                reels = [
                    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
                    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
                    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
                    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
                    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
                ],
                $reels,
                start;

            function init(){
                $reels = $('.reel').each(function(i, el){
                    el.innerHTML = '<div class="reel-holder"><p>' + reels[i].join('</p><p>') + '</p></div><div class="reel-holder"><p>' + reels[i].join('</p><p>') + '</p></div><div class="reel-door">?</div>'
                });

                // Add user's meter reading to fake reel for comparison
                $('.fake-reel').each(function(i, el){
                    el.innerHTML = sReading.charAt(i);
                });

                $('.lever').click(action);
            }

            function action(){
                if (start !== undefined) return;

                $('.reel-door').fadeOut(100);
                $('.lever').attr('disabled', true)
                    .addClass('button-inactive')
                    .text('Good luck!');
                for (var i = 0, len = sTarget.length; i < len; i += 1) {
                    var intOffset = (parseInt(+sTarget.charAt(i) | 0)) * height / 10 - ((height / 10) * 2);
                    numberOutput[i] = intOffset >= 0 ? intOffset : (height - (height / 10));
                }
                for (var j = 0; j < 5; ++j) {
                    speeds[j] = Math.random() + 1;
                    r[j] = (Math.random() * 10 | 0) * height / 10;
                }
                animate();
            }

            function animate(now){
                if (!start) start = now;
                var t = now - start || 0;

                for (var i = 0; i < 5; ++i)
                    $reels[i].scrollTop = (speeds[i] / tMax / 2 * (tMax - t) * (tMax - t) + numberOutput[i]) % height | 0;
                if (t < tMax) {
                    requestAnimationFrame(animate);
                } else {
                    start = undefined;
                    check();
                }
            }

            function check(){
                var matchedNumbers = 0;

                for (var i = 0, len = sTarget.length; i < len; i += 1) {
                    var targetReading = sReading.charAt(i) | 0,
                        targetInt = sTarget.charAt(i) | 0,
                        reelClass = targetReading == targetInt ? 'match' : 'no-match';

                    $('.reel:eq(' + i + '), .fake-reel:eq(' + i + ')').addClass(reelClass);
                    targetReading == targetInt ? matchedNumbers ++ : null;
                }

                var announcement;

                if (matchedNumbers == 5) {
                    announcement = 'You matched all 5 numbers! you win!!!';
                } else if (matchedNumbers == 1) {
                    announcement = 'You matched 1 number. Better luck next time!';
                } else {
                    announcement = 'You matched ' + matchedNumbers + ' numbers. Better luck next time!';
                }

                $('.js-announcement').text(announcement);

                $('.lever').attr('disabled', false).removeClass('button-inactive').text('Start');
            }

            init();
        });
    }

    render() {
        const roll =
            <div className="slot-machine">
                <h1>CSS/JS Slot machine</h1>
                <div className="group">
                    <div className="fake-reel"/>
                    <div className="fake-reel"/>
                    <div className="fake-reel"/>
                    <div className="fake-reel"/>
                    <div className="fake-reel"/>
                </div>

                <div className="group">
                    <div className="reel"/>
                    <div className="reel"/>
                    <div className="reel"/>
                    <div className="reel"/>
                    <div className="reel"/>
                </div>

                <h2 className="js-announcement announcement"/>

                <button className="lever button">
                    Start
                </button>
            </div>;

        return(roll)
    }
}


export default class Casino extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            true_passwords: ['брил123', 'Брил123', 'БРИЛ123', 'BRIL123', 'Bril123', 'bril123']
        }
    }

    render(){
        const login =
            <div className="login">
                <label htmlFor="inp" className="inp">
                    <input type="password" id="inp" placeholder="Пароль в 244 комнату" pattern=".{6,}" onChange={(e) => {
                        if(this.state.true_passwords.includes(e.target.value)){
                            this.setState({
                                login: true,
                            })
                        }
                    }}/>
                    <svg width="280px" height="18px" viewBox="0 0 280 18" className="border">
                        <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"/>
                    </svg>
                    <svg width="14px" height="12px" viewBox="0 0 14 12" className="check">
                        <path d="M1 7 5.5 11 L13 1"/>
                    </svg>
                </label>
            </div>;

        return(this.state.login ? <Case /> : login)
    }
}