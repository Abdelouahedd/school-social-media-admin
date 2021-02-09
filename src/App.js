import {lazy, Suspense, useContext, useState} from "react";
import Spinner from "./component/shared/spinner/Spinner";
import UserProvider, {Context} from "./context/userContext";
import {useUserAuthentication} from "./hooks/useUserAuth";


const Authenticated = lazy(() => import("./Authenticated"))
const Unauthenticated = lazy(() => import("./Unauthenticated"))

function App() {

    const {user, dispatch} = useContext(Context)
    //const { loading, isLoggedIn } = useUserAuthentication(user, dispatch);
    const [isLoggedIn] = useState(true)
    const [loading] = useState(false)

    return (
        <>
            {
                loading ?
                    (<Spinner/>) :
                    (
                        isLoggedIn === false ?
                            (<Suspense fallback={<Spinner/>}>
                                <Unauthenticated/>
                            </Suspense>)
                            :
                            (<Suspense fallback={<Spinner/>}>
                                <Authenticated/>
                            </Suspense>)
                    )
            }
        </>
    );
}

export default () => (
    <UserProvider>
        <App/>
    </UserProvider>
)

