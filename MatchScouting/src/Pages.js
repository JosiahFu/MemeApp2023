import { RadioButtons, NumberInput } from "./Form";
import './App.css';


function Page(props) {
    return (
        <div className={props.selected ? 'page selected' : 'page'} id={props.id}>
            {props.children}
        </div>

    );
}
<div style="float: left;">
<h1>fouls </h1>
</div>

function SignIn(props) {
    return (
        <div>
            <p className="section-label">Energized</p>
            <form onSubmit={props.onSubmit} action="#">
                <div className="textArea">

                    <input type="text" id="Sname" name="Sname" placeholder="Scouter Name" />
                    <br />
                    <label className="item-label" htmlFor="Ename"><strong>Event Name</strong> </label>
                    <br />
                    <br />
                    <select name="Ename" id="Ename" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Choose Event</option>
                        <option value="BeachBlitz">Port Hueneme</option>
                    </select>
                    <input type="submit" className="SAVE" value="Sign In" />
                </div>
            </form>
        </div>
    );
}

function PreGame(props) {
    return (
        <Page selected={props.selected} className="page" id="pre-game">
            <p className="section-label">Pre-Game</p>

            <div className="textArea">
                <label className="item-label" htmlFor="Num"><strong>Match Number</strong> </label>

                <input className="text-input" type="text" id="Num" name="Num" />

                <br></br>
                <br></br>
                <label className="item-label" htmlFor="Num"><strong>Team Number</strong> </label>
                <input className="text-input" type="text" id="Num" name="Num" />
                <br />
                <div className="textArea">

                    <h1><bold>Team Alliance</bold></h1>

                    <RadioButtons items={['Red 1', 'Red 2', 'Red 3', 'Blue 1', 'Blue 2', 'Blue 3']} name="alliance"/>
                    <h1><strong>No show robot?</strong></h1>
                    <RadioButtons items={['Yes', 'No']} name="showtime"/>
                </div>
            </div>
        </Page>
        //Take out Viv
        //All text black
        //Make text bigger
        //black outline in every box
        //
    );
}


function Auto(props) {
    return (
        <Page selected={props.selected} id="auto">
            <p className="section-label">Auto</p>
            <div className="textArea">

                {/* <div class="container"> */}
                    <div class="center">
                        {/* <button>Mobility</button>. */}
        
                        {/* <input type ="button" /> */}
                    </div>
                    
                {/* </div> */}
                <input type="checkbox" name="mobilty"></input>
                        <label for="mobility">Mobility</label>
                <br></br>
                <h1>Cones</h1>
                <h2>High</h2>
                <NumberInput items={['1']} />
                <h2>Mid</h2>
                {/* <br></br> */}
                <NumberInput items={['1']} />
                <h2>Low</h2>
                {/* <br></br> */}
                <NumberInput items={['1']} />
                <br></br>
                <h1>Cubes</h1>
                <h2>High</h2>
                <NumberInput items={['1']} />
                <h2>Mid</h2>
                <NumberInput items={['1']} />
                <h2>Low</h2>
                <NumberInput items={['1']} />
                <br></br>
                <h1>Charging Station</h1>
                <RadioButtons items={[<strong> Docked </strong>, <strong>Engaged</strong>, <strong>No points</strong>]}name="9" />




            </div>
        </Page>
    );
}

function TeleOp(props) {
    return (
        <Page selected={props.selected} id="tele-op">
            <p className="section-label">Teleop/Endgame</p>

            <div className="textArea">

                <h1>Cones</h1>
                <h2>High</h2>
                <NumberInput items={['1']} />
                <h2>Mid</h2>
                {/* <br></br> */}
                <NumberInput items={['1']} />
                <h2>Low</h2>
                {/* <br></br> */}
                <NumberInput items={['1']} />
                <br></br>
                <h1>Cubes</h1>
                <h2>High</h2>
                <NumberInput items={['1']} />
                <h2>Mid</h2>
                <NumberInput items={['1']} />
                <h2>Low</h2>
                <NumberInput items={['1']} />
                <br></br>
                <br></br>
                <h1>Charging Station</h1>
                <RadioButtons items={[<strong> Docked </strong>, <strong>Engaged</strong>, <strong>No points</strong>, <strong>Parking</strong>]}name="bruh" />
            </div>



        </Page>

    );
}

function SavePage(props) {
    return (
        <Page selected={props.selected} id="S">
            <p className="section-label">Sumbit</p>

            <div className="textArea">

                <br></br>
                <br></br>

                <div className="areaSaP">
                    <label htmlFor="notes" className="item-label"><strong>Notes</strong></label>
                    <h1>Some things you could comment are</h1>
                    <li>disabled during the game</li>
                    <li>  defensive bot </li>
                    <li> do they play defense  </li>
                    <li>  do they play optimistical  </li>
                    <li> thinking of other questions   </li>

                    <li>Can the robot balance with other robots?</li>
                    <li>Does the robot securely/conesistently control game pieces?</li>
                    <li>Does the robot securely/conesistently control game pieces?</li>Did the robot gain the mobility bonus?
                    <br />
                    <br />
                    <input type="text" id="notes" name="notes" />
                    {/* <label className="item-label" htmlFor="clear">Sumbit and clear</label>
                    <input type="submit" className="SAVE" value="Generate QR code"></input>
                    <br />
                    <label className="item-label" htmlFor="continue">Save and continue</label>
                    <input type="reset" className="CLEAR" value="Clear Form" />
                    <br />
                    <br />

                    <div id="QRCode">{props.QRCode}</div> */}
                </div>
            </div>
        </Page>

    );
}





export { SignIn, PreGame, Auto, TeleOp, SavePage };
