var config = {
    mode: "fixed_servers",
    rules: {
        singleProxy: {
            scheme: "socks5",
            host: "127.0.0.1",
            port: 1080
        },
        bypassList: [
            "127.0.0.1",
            "[::1]",
            "0.0.0.0",
            "[::]",
            "192.168.0.0/16",
            "10.0.0.0/8",
            "localhost",
            "<local>"
        ]
    }
};
chrome.proxy.settings.set(
    {value: config, scope: 'regular'},
    function() {}
);