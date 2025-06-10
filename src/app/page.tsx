'use client';

import {
  AppBar,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Snackbar,
  Switch,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  LightMode,
  DarkMode,
  ExpandMore,
  Info as InfoIcon,
  Share as ShareIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import { useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function HomePage() {
  const [checked, setChecked] = useState(true);
  const [selected, setSelected] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MUI Components Demo
          </Typography>
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          よく使う MUI コンポーネント一覧
        </Typography>

        <Divider sx={{ my: 4 }}>Button</Divider>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" startIcon={<SendIcon />} onClick={() => setOpenSnackbar(true)}>
            送信
          </Button>
          <Button variant="outlined" startIcon={<ShareIcon />}>
            共有
          </Button>
          <Button variant="text" startIcon={<InfoIcon />}>
            情報
          </Button>
        </Box>

        <Divider sx={{ my: 4 }}>Form</Divider>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid size={12}>
            <TextField label="名前" fullWidth variant="outlined" />
          </Grid>
          <Grid size={12}>
            <FormControl fullWidth>
              <InputLabel id="select-label">選択肢</InputLabel>
              <Select
                labelId="select-label"
                value={selected}
                label="選択肢"
                onChange={(e) => setSelected(e.target.value)}
              >
                <MenuItem value="apple">りんご</MenuItem>
                <MenuItem value="banana">バナナ</MenuItem>
                <MenuItem value="orange">オレンジ</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={6}>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
              label="チェックボックス"
            />
          </Grid>
          <Grid size={6}>
            <FormControlLabel control={<Switch />} label="スイッチ" />
          </Grid>
          <Grid size={12}>
            <Typography gutterBottom>ボリューム</Typography>
            <Slider defaultValue={30} aria-label="Volume" />
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }}>Card</Divider>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://picsum.photos/800/600"
            alt="ランダム画像"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              カードタイトル
            </Typography>
            <Typography variant="body2" color="text.secondary">
              これは MUI のカードコンポーネントの例です。画像・テキスト・ボタンを組み合わせて構成します。
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => setOpenDialog(true)}>
              詳細を見る
            </Button>
            <Button size="small">共有</Button>
          </CardActions>
        </Card>

        <Divider sx={{ my: 4 }}>その他</Divider>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Chip label="ラベル" />
          <Chip avatar={<Avatar>M</Avatar>} label="Avatar付き" />
          <Avatar alt="ユーザー" src="https://i.pravatar.cc/40" />
        </Box>

        <Accordion sx={{ mt: 4 }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>詳細情報</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              これはアコーディオンの詳細です。クリックで展開・折りたたみできます。
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>

      {/* Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>詳細ダイアログ</DialogTitle>
        <DialogContent>
          <DialogContentText>
            これはダイアログのサンプルです。ユーザーに確認や追加情報を表示したいときに便利です。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>閉じる</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="ボタンがクリックされました"
      />
    </ThemeProvider>
  );
}