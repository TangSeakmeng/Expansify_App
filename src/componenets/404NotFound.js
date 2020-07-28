import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404 Not Found! <Link to="/">Goto Home Page</Link>
    </div>
);

export default NotFoundPage;