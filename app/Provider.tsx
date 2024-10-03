import React from "react";
import { Provider } from "react-redux";
import {store} from "../redux/store";

interface ProvidersProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any;
}

export function Providers({children}:ProvidersProps) {
    return <Provider store={store}>{children}</Provider>;
}