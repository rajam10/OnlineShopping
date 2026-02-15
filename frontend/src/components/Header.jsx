import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";

const Header = () => {
  return (
    <header
      style={{ borderBottom: "1px solid #bdb8b8", backgroundColor: "#fff" }}
      className="header"
    >
      <Grid container spacing={0}>
        <Grid sx={{ padding: "0.5rem", textAlign: "center" }} size={2}>
          <label>E-Commerce</label>
        </Grid>
        <Grid sx={{ padding: "0.5rem" }} size={7}>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f1f3f2",
                borderRadius: "8px",
                overflow: "hidden",
                maxWidth: 800,
              }}
            >
              <TextField
                fullWidth
                sx={{
                  "& input:focus": {
                    outline: "none",
                    boxShadow: "none",
                  },
                }}
                placeholder="Search for organic fruits, dairy, or groceries..."
                variant="standard"
                id="search_input"
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  sx: { px: 1, py: 0.5 },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  height: "-webkit-fill-available",
                  borderRadius: 0,
                  bgcolor: "#22c55e",
                  color: "#000",
                  fontWeight: "bold",
                  px: 4,
                  "&:hover": { bgcolor: "#16a34a" },
                }}
              >
                Search
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid sx={{ padding: "0.5rem" }} size={3}>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <IconButton color="primary" aria-label="cart">
              <ShoppingCartIcon />
            </IconButton>
            <IconButton color="primary" aria-label="favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton color="primary" aria-label="profile">
              <PersonIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
