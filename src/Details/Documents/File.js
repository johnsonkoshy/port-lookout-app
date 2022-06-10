import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import FileOpenIcon from '@mui/icons-material/FileOpen';

export default function File({name, downloadUrl}) {
  const fileTypeIcon = (fileName)=>{
    switch(fileName.split('.').pop()){
      case 'pdf':
        return <FileOpenIcon />
      case 'doc':
        return <FileOpenIcon />
      case 'docx':
        return <FileOpenIcon />
      case 'xls':
        return <FileOpenIcon />
      case 'xlsx':
        return <FileOpenIcon />
      case 'ppt':
        return <FileOpenIcon />
      case 'pptx':
        return <FileOpenIcon />
      case 'txt':
        return <FileOpenIcon />
      case 'jpg':
        return <FileOpenIcon />
      case 'jpeg':
        return <FileOpenIcon />
      case 'png':
        return <FileOpenIcon />
    
      default:
        return <FileOpenIcon />
    }
  }
  return (
    <Card sx={{ maxWidth: 100 }}>
      <CardContent sx={{height:'75%'}}>
        <Box sx={{height:'100%', width:'100%', display:'flex', justifyContent:"center", alignItems:"center"}}>
          {
            fileTypeIcon(name)
          }
        </Box>
       

        
        
      </CardContent>
      <CardActions sx={{backgroundColor:'primary.main', height:'25%'}}>
        <Button size="small" variant="a" href={downloadUrl} sx={{ textTransform: "none",color:'primary.contrastText' }}>
          {name}
        </Button>
      </CardActions>
    </Card>
  );
}
