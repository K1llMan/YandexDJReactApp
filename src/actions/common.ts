export function action(store: any, type: string, path: string, value: any) {
    store.dispatch({ 
        type: type, 
        path: path,
        value: value 
    })
}