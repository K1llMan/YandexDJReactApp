export class WebSocketClient {
    socketHandlers: any;
    socket: WebSocket;

    constructor() {
        this.socketHandlers = {};
        this.socket = null;
    }

    connect(url) {
        if (this.socket != null && this.socket.readyState == this.socket.OPEN)
            this.socket.close();

        this.socket = new WebSocket(url);

        this.socket.onopen = () => console.log("Соединение установлено.");

        this.socket.onclose = (event: CloseEvent) => {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                console.log('Обрыв соединения'); // например, "убит" процесс сервера
            }
            console.log('Код: ' + event.code + ' причина: ' + event.reason);
        };

        /*
        {
            'event': 'eventName',
            'data': {
                'd1': 'my very useful data'
            }
        }
        */
        this.socket.onmessage = (event: MessageEvent) => {
            let data = decodeURI(event.data);
            console.log(`Получены данные ${data}`);
            let msg = JSON.parse(data);

            if (!this.socketHandlers || !this.socketHandlers[msg.event])
                return;

            this.socketHandlers[msg.event].forEach((h) => {
                h(msg.data);
            });
        };

        this.socket.onerror = (error) => {
            console.log(error);
        };
    }

    disconnect() {
        if (this.socket && this.socket.readyState !== this.socket.CLOSED)
            this.socket.close();
    }

    send(data) {
        if (this.socket == null || this.socket.readyState === this.socket.CLOSED)
            return;

        this.socket.send(encodeURI(JSON.stringify(data)));
    }

    on(event: string, handler: (data: any) => void) {
        if (!this.socketHandlers[event])
            this.socketHandlers[event] = [];

        this.socketHandlers[event].push(handler);
    }

    removeHandler(event: string, handler: (data: any) => void) {
        let handlers = this.socketHandlers[event];
        let index = handlers.indexOf(handler);
        if (index != -1)
            this.socketHandlers[event] = this.socketHandlers[event].splice(index, 1);
    }

    onConnect(handler: () => void) {
        if (this.socket)
            this.socket.addEventListener("open", handler);
    }

    isConnected() {
        return this.socket && this.socket.readyState === this.socket.OPEN;
    }
}