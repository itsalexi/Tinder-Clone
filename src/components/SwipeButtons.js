import React from 'react';
import '../css/SwipeButtons.css';

import {
    Replay,
    Close,
    StarRate,
    Favorite,
    FlashOn,
} from '@mui/icons-material';

import { IconButton } from '@mui/material';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButton repeat">
                <Replay fontSize="large" />
            </IconButton>
            <IconButton className="swipeButton close">
                <Close fontSize="large" />
            </IconButton>
            <IconButton className="swipeButton star">
                <StarRate fontSize="large" />
            </IconButton>
            <IconButton className="swipeButton right">
                <Favorite fontSize="large" />
            </IconButton>
            <IconButton className="swipeButton lightning">
                <FlashOn fontSize="large" />
            </IconButton>
        </div>
    );
}

export default SwipeButtons;
