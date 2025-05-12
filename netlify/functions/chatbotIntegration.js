// exports.handler = async function (event, context) {
//     return {
//         statusCode: 200,
//         headers: { "Content-Type": "application/javascript" },
//         body: `
//             (function() {
//                 console.log("Embedding chatbot in an iframe...");

//                 const chatbotContainer = document.createElement("div");
//                 chatbotContainer.style.position = "fixed";
//                 chatbotContainer.style.bottom = "20px";
//                 chatbotContainer.style.right = "20px";
//                 chatbotContainer.style.width = "400px";
//                 chatbotContainer.style.height = "500px";
//                 chatbotContainer.style.borderRadius = "10px";
//                 chatbotContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
//                 chatbotContainer.style.zIndex = "9999";

//                 const iframe = document.createElement("iframe");
//                 iframe.src = "https://ataichatbot.netlify.app";
//                 iframe.style.width = "100%";
//                 iframe.style.height = "100%";
//                 iframe.style.border = "none";
//                 iframe.style.borderRadius = "10px";

//                 chatbotContainer.appendChild(iframe);
//                 document.body.appendChild(chatbotContainer);
//             })();
//         `,
//     };
// };


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
                chatbotContainer.style.height = "550px";
                chatbotContainer.style.borderRadius = "10px";
                chatbotContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                chatbotContainer.style.zIndex = "9999";
                chatbotContainer.style.overflow = "visible"; // Prevents border overflow

                const iframe = document.createElement("iframe");
                iframe.src = "https://ataichatbot.vercel.app/chatbot/40";
                // iframe.src = "https://ataichatbot.netlify.app";
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.style.border = "none"; // Remove border
                iframe.style.outline = "none"; // Remove outline
                iframe.style.boxShadow = "none"; // Remove any shadow
                iframe.style.borderRadius = "10px"; // Ensure smooth edges
                iframe.style.backgroundColor = "transparent"; // Prevent any background leaks
                iframe.style.display = "block"; // Remove default iframe spacing
                iframe.style.padding = "0"; // Remove extra spacing
                iframe.style.margin = "0"; // Remove any unwanted margins

                chatbotContainer.appendChild(iframe);
                document.body.appendChild(chatbotContainer);

                // Inject global CSS to force remove any iframe styles
                const style = document.createElement("style");
                style.innerHTML = \`
                    iframe {
                        border: none !important;
                        outline: none !important;
                        box-shadow: none !important;
                        background: transparent !important;
                        padding: 0 !important;
                        margin: 0 !important;
                    }
                    div:has(> iframe) {
                        border: none !important;
                        box-shadow: none !important;
                    }
                \`;
                document.head.appendChild(style);
            })();
        `,
    };
};


