import Header from '../components/Header';
import SidePanel from '../components/SidePanel';
import ProductMain from '../components/ProductMain';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Checkbox,
  FormControlLabel,
  Slider,
  Button,
  List,
  ListItemButton,
} from "@mui/material";
const Dashboard = () => {
    return (
        <div>
            <Header />
            <Box sx={{pt:3, bgcolor: "#f5f6f7", minHeight: "100vh" }}>
            <Grid container xs={11} mx="auto" spacing={2}>
                <SidePanel />
                <ProductMain />
            </Grid>
            </Box>
        </div>
    );
}

export default Dashboard;