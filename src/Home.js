
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const locations = [
    { name: 'Ram Mandir', description: 'A famous temple in India located in UP Ayodhya open 22 january by our Prime minister.', coordinates: { lat: 28.6139, lng: 77.2090 }, Image: "https://static.toiimg.com/thumb/msid-77363789,width-1280,height-720,resizemode-4/77363789.jpg" },
    { name: 'India Gate', description: 'A war memorial in New Delhi, India.', coordinates: { lat: 28.6129, lng: 77.2295 } },
    { name: 'Gateway of India', description: 'A historic monument in Mumbai, India.', coordinates: { lat: 18.9217, lng: 72.8347 } },
  ];

  const navigateToLocation = (coordinates) => {
    window.open(`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`, '_blank');
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <List>
              {locations.map((location) => (
                <div key={location.name}>
                  <ListItem button onClick={() => setSelectedLocation(location)}>
                    <ListItemText primary={location.name} />
                  </ListItem>

                  <Divider />
                </div>

              ))}
            </List>

          </Drawer>
          <img
            src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/frzt4poxolfzpp4qug4f"
            alt="Company Logo"
            style={{ marginRight: '10px' }}
          />

          <Typography variant="h6" component="div">
            GPS Tracking We Make It Easy
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        {selectedLocation && (
          <Card style={{ margin: '20px', padding: '20px' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {selectedLocation.name}
              </Typography>
              <Typography color="text.secondary">
                {selectedLocation.description}
              </Typography>
              {selectedLocation.image}
              <Button variant="contained" onClick={() => navigateToLocation(selectedLocation.coordinates)}>
                View Location on Map
              </Button>
            </CardContent>


            {/* <div>
              <h1>Static Maps Sample</h1>
              <img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=YOUR_API_KEY" />
            </div> */}
          </Card>
        )}
        {!selectedLocation && (
          <p>
            As an epitome of trust and stable solutions ensuring 99% uptime, our
            Fleet Management Solutions strives to excel with world-class
            technology and expertise aspiring to bring together the largest
            network of state-of-the-art GPS hardware, software, and PAN India
            support services.
          </p>
        )}
      </main>
      {/* <img
  src="https://www.shutterstock.com/image-photo/country-road-green-mountains-summer-260nw-1937163538.jpg"
  alt="Background Image"
  style={{ width: '100%', height: '600px' }}
/> */}

    </div>
  );
}

export default Home;
