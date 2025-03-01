exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/javascript" },
        body: `
            (function() {
                console.log("Embedding chatbot in an iframe...");

                const chatbotContainer = document.createElement("div");
                chatbotContainer.style.position = "fixed";
                chatbotContainer.style.bottom = "20px";
                chatbotContainer.style.right = "20px";
                chatbotContainer.style.width = "400px";
                chatbotContainer.style.height = "500px";
                chatbotContainer.style.borderRadius = "10px";
                chatbotContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                chatbotContainer.style.zIndex = "9999";

                const iframe = document.createElement("iframe");
                iframe.src = "https://ataichatbot.netlify.app";
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.style.border = "none";
                iframe.style.borderRadius = "10px";

                chatbotContainer.appendChild(iframe);
                document.body.appendChild(chatbotContainer);
            })();
        `,
    };
};
