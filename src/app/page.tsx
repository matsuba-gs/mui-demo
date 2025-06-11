'use client';

import {
  Alert,
  AlertTitle,
  AppBar,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Badge,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Chip,
  CircularProgress,
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
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Rating,
  Select,
  Slider,
  Snackbar,
  Stack,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
  Switch,
} from '@mui/material';
import {
  LightMode,
  DarkMode,
  ExpandMore,
  Home as HomeIcon,
  Info as InfoIcon,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Share as ShareIcon,
  Send as SendIcon,
  Star as StarIcon,
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
  const [tabValue, setTabValue] = useState(0);
  const [ratingValue, setRatingValue] = useState(3);
  const [progress, setProgress] = useState(60);

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

        <Divider sx={{ my: 4 }}>テーブル</Divider>
        <TableContainer component={Paper}>
          <Table aria-label="シンプルテーブル">
            <TableHead>
              <TableRow>
                <TableCell>名前</TableCell>
                <TableCell align="right">年齢</TableCell>
                <TableCell align="right">職業</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">田中太郎</TableCell>
                <TableCell align="right">28</TableCell>
                <TableCell align="right">エンジニア</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">佐藤花子</TableCell>
                <TableCell align="right">32</TableCell>
                <TableCell align="right">デザイナー</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">鈴木一郎</TableCell>
                <TableCell align="right">45</TableCell>
                <TableCell align="right">マネージャー</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 4 }}>リスト</Divider>
        <Paper elevation={3} sx={{ maxWidth: 360 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="ホーム" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="プロフィール" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="メッセージ" />
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>

        <Divider sx={{ my: 4 }}>タブ</Divider>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} centered>
            <Tab label="タブ1" />
            <Tab label="タブ2" />
            <Tab label="タブ3" />
          </Tabs>
          <Box sx={{ p: 3 }}>
            {tabValue === 0 && (
              <Typography>タブ1の内容です。タブをクリックして切り替えることができます。</Typography>
            )}
            {tabValue === 1 && (
              <Typography>タブ2の内容です。異なるコンテンツを表示できます。</Typography>
            )}
            {tabValue === 2 && (
              <Typography>タブ3の内容です。複数のコンテンツを整理するのに便利です。</Typography>
            )}
          </Box>
        </Box>

        <Divider sx={{ my: 4 }}>プログレス</Divider>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Typography>リニアプログレス</Typography>
          <LinearProgress variant="determinate" value={progress} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CircularProgress variant="determinate" value={progress} />
            <Typography variant="body2">{`${Math.round(progress)}%`}</Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 4 }}>アラート</Divider>
        <Stack spacing={2}>
          <Alert severity="error">
            <AlertTitle>エラー</AlertTitle>
            これはエラーアラートです — <strong>重要な情報を確認してください!</strong>
          </Alert>
          <Alert severity="warning">
            <AlertTitle>警告</AlertTitle>
            これは警告アラートです — <strong>注意が必要です!</strong>
          </Alert>
          <Alert severity="info">
            <AlertTitle>情報</AlertTitle>
            これは情報アラートです — <strong>参考にしてください!</strong>
          </Alert>
          <Alert severity="success">
            <AlertTitle>成功</AlertTitle>
            これは成功アラートです — <strong>操作が完了しました!</strong>
          </Alert>
        </Stack>

        <Divider sx={{ my: 4 }}>その他のコンポーネント</Divider>
        <Stack spacing={3}>
          <Box>
            <Typography gutterBottom>評価</Typography>
            <Rating
              name="simple-controlled"
              value={ratingValue}
              onChange={(event, newValue) => {
                setRatingValue(newValue);
              }}
            />
          </Box>

          <Box>
            <Typography gutterBottom>バッジ</Typography>
            <Stack direction="row" spacing={2}>
              <Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
              <Badge badgeContent={99} color="secondary" max={99}>
                <NotificationsIcon />
              </Badge>
            </Stack>
          </Box>

          <Box>
            <Typography gutterBottom>ツールチップ</Typography>
            <Tooltip title="詳細情報を表示します">
              <Button>ホバーしてください</Button>
            </Tooltip>
          </Box>

          <Box>
            <Typography gutterBottom>パンくずリスト</Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="#">
                ホーム
              </Link>
              <Link underline="hover" color="inherit" href="#">
                カテゴリ
              </Link>
              <Typography color="text.primary">現在のページ</Typography>
            </Breadcrumbs>
          </Box>

          <Box>
            <Typography gutterBottom>ペーパー (エレベーション)</Typography>
            <Stack direction="row" spacing={2}>
              <Paper elevation={1} sx={{ p: 2, width: 100, textAlign: 'center' }}>
                <Typography>深さ 1</Typography>
              </Paper>
              <Paper elevation={3} sx={{ p: 2, width: 100, textAlign: 'center' }}>
                <Typography>深さ 3</Typography>
              </Paper>
              <Paper elevation={6} sx={{ p: 2, width: 100, textAlign: 'center' }}>
                <Typography>深さ 6</Typography>
              </Paper>
            </Stack>
          </Box>
        </Stack>
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
