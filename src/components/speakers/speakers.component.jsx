import "./speakers.styles.css";
import One from '../../assets/speaker1.jpeg';
import Two from '../../assets/speaker2.jpg';
import Three from '../../assets/speaker3.jpg';

const Speakers=()=>{

    return(
      <div style={{ margin:'20px'}}>
      <h1>SPEAKERS</h1>
      <div style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
          <div className='speakers-card'>
      			<img src={One} alt="card-img"/>
      			<h2 className='name' style={{fontWeight:'bold',fontFamily: `"Lucida Console","Courier New", monospace`}}>Rahul Singla</h2>
      			<p>on</p>
            <p style={{fontSize : "2.0rem"}}>π·ππππππππ π·ππππππππππ</p>

                <p> Date: 20th February, 2021
                <br></br>Time: 4:00 PM IST</p>

          </div>

          <div className='speakers-card'>
      			<img src={Two} alt="card-img"/>
      			<h2 className='name' style={{fontWeight:'bold',fontFamily: `"Lucida Console","Courier New", monospace`}}><a href="https://www.linkedin.com/in/kunal-kushwaha" style={{color:'inherit'}} target="blank">Kunal Kushwaha</a></h2>
      			<p>on</p>
          <p style={{fontSize : "2.0rem"}}>πͺππππ π΅πππππ πππ πΆπΊ</p>


                <p>Date: 22nd February,2021
                <br></br>Time: 6:00 PM IST</p>

          </div>

          <div className='speakers-card'>
      			<img src={Three} alt="card-img"/>
      			<h2 className='name' style={{fontWeight:'bold',fontFamily: `"Lucida Console","Courier New", monospace`}}> <a href="https://www.facebook.com/robonitp/" style={{color:'inherit'}} target="blank">Lentin Joseph</a></h2>
      			<p>on</p>
            <p style={{fontSize : "2.0rem"}}>π°πππππππππππ ππ πΉπΆπΊ</p>


                <p>Date: 24th February, 2021
                <br></br>Time: 7:00 PM IST</p>
          </div>
    </div>
    </div>
  )
}
  export default Speakers;
