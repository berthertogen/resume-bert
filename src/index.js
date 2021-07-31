import '../node_modules/bootstrap/scss/bootstrap.scss';
import './styles.sass';

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faFilePdf, faFileWord, faPrint, faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faFilePdf, faFileWord, faPrint, faStar)
dom.watch()
