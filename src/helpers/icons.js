import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

function Icons() {
    return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle);
};

export default Icons;