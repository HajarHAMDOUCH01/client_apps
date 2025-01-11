  import './App.css';
  import '@fontsource/roboto/300.css';
  import '@fontsource/roboto/400.css';
  import '@fontsource/roboto/500.css';
  import '@fontsource/roboto/700.css';
  import { Grid2, Paper} from '@mui/material';
  import { useNavigate } from 'react-router-dom';



  function App() {
    const navigate = useNavigate();


    const handleStartClick = () => {
      navigate('/TranslatotBotPage');
    };

    return (
      <div className="App">
      <Grid2 container justifyContent="center" alignItems="center" style={{ minHeight: '100vh'}}>
        <Grid2 item xs={3} lg={3}>   
        <div className="flags-container">
          <img src="/usa.jpg" alt="USA Flag" className="flag" />
          <img src="/uk.webp" alt="UK Flag" className="flag" />
          <img src="/france.webp" alt="France Flag" className="flag" />
          <img src="/spain.png" alt="Spain Flag" className="flag" />
        </div> 
          <div 
                style={{
                  position: 'relative',
                  fontWeight: 'bold',
                  fontSize: '40px', 
                  height: '50vh', 
                  width:'100%',
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                }}
              >
                <img               
                src="/maroc.jpg" 
                alt="Image" 
                style={{
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  borderRadius: '10px', 
              }}
              />
              </div>
              <button
              onClick={handleStartClick}
              style={{
                width: '100%',
                padding: '10px', 
                marginTop: '20px', 
                fontSize: '18px',
                backgroundColor: '#056e20',
                color: 'white', 
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              Start
            </button>
          </Grid2>
      </Grid2>
    </div>
    );
  }

  export default App;
