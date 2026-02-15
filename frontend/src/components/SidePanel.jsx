import {
  Box,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Slider,
  Button,
  List,
  ListItemButton,
} from "@mui/material";

const SidePanel = () => {
    return (
        <Grid item md={3}>
          <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 2 }}>
            
            <Typography sx={{ textAlign: "left" }} variant="h6" fontWeight={600} mb={2}>
              Categories
            </Typography>

            <List sx={{ borderBottom: "1px solid #ebe5e5", mb: 2 }}>
              {["Organic", "Dairy & Eggs", "Fruits & Veggies", "Bakery"].map(
                (item, i) => (
                  <ListItemButton
                    key={i}
                    sx={{
                      borderRadius: 2,
                      mb: 1,
                      bgcolor: i === 0 ? "#e8f5e9" : "transparent",
                    }}
                  >
                    {item}
                  </ListItemButton>
                )
              )}
            </List>

            <Box sx={{ borderBottom: "1px solid #ebe5e5", mb: 2 }}>
            <Typography sx={{ textAlign: "left"}} variant="h6" mt={3} mb={1}>
              Refine Results
            </Typography>

            <FormControlLabel control={<Checkbox sx={{ color: "#22c55e","&.Mui-checked": {
      color: "#22c55e",
    } }} />} label="On Sale" />
            <FormControlLabel control={<Checkbox sx={{ color: "#22c55e","&.Mui-checked": {
      color: "#22c55e",
    } }} />} label="In Stock" />
            <FormControlLabel control={<Checkbox sx={{ color: "#22c55e","&.Mui-checked": {
      color: "#22c55e",
    } }} />} label="Local Farm" />
            </Box>

            <Typography sx={{ textAlign: "left"}} variant="h6" mt={3}>
              Price Range
            </Typography>

            <Slider min={0} max={500} sx={{ color: "#22c55e" }} defaultValue={[0, 500]} valueLabelDisplay="auto" />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 2, bgcolor: "#22c55e" }}
            >
              Apply Filters
            </Button>

            <Button fullWidth sx={{ mt: 1 }}>
              Clear All
            </Button>
          </Box>
        </Grid>
    );
}

export default SidePanel;