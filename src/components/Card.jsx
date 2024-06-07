import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Skeleton } from '@mui/material';

export default function MCard({quote ,author,image}) {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: 'black', color: 'white' }}>
            {image ? (
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title={author}
                />
            ) : (
                <Skeleton variant="rectangular" sx={{ height: 140, width: '100%' }} />
            )}
            <CardContent>
                <h4>{quote}</h4>
                <h5>- {author}</h5>
            </CardContent>
        </Card>
      );
}
