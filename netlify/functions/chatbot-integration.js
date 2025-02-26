exports.handler = async (event) => {

    // const allowedReferers = ["https://your-client-site.com", "https://another-allowed-site.com"];

    // const referer = event.headers.referer || "";
    // if (!allowedReferers.some((domain) => referer.startsWith(domain))) {
    //     return {
    //         statusCode: 403,
    //         body: "Forbidden",
    //     };
    // }

    const script = `(function () {
        const chatbotButton = document.createElement("div");
        chatbotButton.innerHTML = "💬";
        chatbotButton.style.position = "fixed";
        chatbotButton.style.bottom = "20px";
        chatbotButton.style.right = "20px";
        chatbotButton.style.width = "50px";
        chatbotButton.style.height = "50px";
        chatbotButton.style.borderRadius = "50%";
        chatbotButton.style.backgroundColor = "#007bff";
        chatbotButton.style.color = "white";
        chatbotButton.style.display = "flex";
        chatbotButton.style.justifyContent = "center";
        chatbotButton.style.alignItems = "center";
        chatbotButton.style.fontSize = "24px";
        chatbotButton.style.cursor = "pointer";
        chatbotButton.style.zIndex = "9999";
        chatbotButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
        document.body.appendChild(chatbotButton);

        const chatbotContainer = document.createElement("div");
        chatbotContainer.style.position = "fixed";
        chatbotContainer.style.bottom = "80px";
        chatbotContainer.style.right = "20px";
        chatbotContainer.style.width = "400px";
        chatbotContainer.style.height = "500px";
        chatbotContainer.style.borderRadius = "10px";
        chatbotContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        chatbotContainer.style.display = "none";
        chatbotContainer.style.zIndex = "9999";

        const iframe = document.createElement("iframe");
        iframe.src = "https://ataichatbot.netlify.app";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.style.borderRadius = "10px";

        chatbotContainer.appendChild(iframe);
        document.body.appendChild(chatbotContainer);

        chatbotButton.addEventListener("click", function () {
            chatbotContainer.style.display = chatbotContainer.style.display === "none" ? "block" : "none";

            iframe.contentWindow.postMessage(
                {
                    type: "website-info",
                    url: window.location.href,
                    user: { name: "John Doe", email: "johndoe@example.com" },
                },
                "*"
            );
        });

        window.addEventListener("message", (event) => {
            if (event.data.type === "chatbot-ready") {
                console.log("Chatbot is ready to receive messages.");
            }
        });
    })();`;

    return {
        statusCode: 200,
        headers: { "Content-Type": "application/javascript" },
        body: script,
    };
};
