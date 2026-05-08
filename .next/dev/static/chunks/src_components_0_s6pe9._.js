(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/chat.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "aiMessage": "chat-module__wWbbIa__aiMessage",
  "chatBody": "chat-module__wWbbIa__chatBody",
  "chatContainer": "chat-module__wWbbIa__chatContainer",
  "chatFooter": "chat-module__wWbbIa__chatFooter",
  "chatHeader": "chat-module__wWbbIa__chatHeader",
  "chatInput": "chat-module__wWbbIa__chatInput",
  "closeBtn": "chat-module__wWbbIa__closeBtn",
  "fab": "chat-module__wWbbIa__fab",
  "fabIcon": "chat-module__wWbbIa__fabIcon",
  "messageBubble": "chat-module__wWbbIa__messageBubble",
  "messageWrapper": "chat-module__wWbbIa__messageWrapper",
  "sendBtn": "chat-module__wWbbIa__sendBtn",
  "userMessage": "chat-module__wWbbIa__userMessage",
});
}),
"[project]/src/components/AiChatWidget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AiChatWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/chat.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function AiChatWidget() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: 'ai',
            content: 'Hi! Im the Matrix Telematics AI. How can I help you regarding TIMS/eTIMS or our ADAS solutions?'
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSend = async (e)=>{
        e.preventDefault();
        if (!input.trim()) return;
        const newMessages = [
            ...messages,
            {
                role: 'user',
                content: input
            }
        ];
        setMessages(newMessages);
        setInput('');
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messages: newMessages
                })
            });
            const data = await res.json();
            setMessages([
                ...newMessages,
                {
                    role: 'ai',
                    content: data.reply
                }
            ]);
        } catch (error) {
            setMessages([
                ...newMessages,
                {
                    role: 'ai',
                    content: 'Im having trouble connecting right now.'
                }
            ]);
        }
    };
    if (!isOpen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fab,
            onClick: ()=>setIsOpen(true),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fabIcon,
                children: "💬"
            }, void 0, false, {
                fileName: "[project]/src/components/AiChatWidget.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AiChatWidget.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        children: "Matrix AI Assistant"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AiChatWidget.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeBtn,
                        onClick: ()=>setIsOpen(false),
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AiChatWidget.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AiChatWidget.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatBody,
                children: messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageWrapper} ${msg.role === 'ai' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aiMessage : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userMessage}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageBubble,
                            children: msg.content
                        }, void 0, false, {
                            fileName: "[project]/src/components/AiChatWidget.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/src/components/AiChatWidget.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/AiChatWidget.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSend,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatFooter,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        placeholder: "Type your question...",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatInput
                    }, void 0, false, {
                        fileName: "[project]/src/components/AiChatWidget.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sendBtn,
                        children: "Send"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AiChatWidget.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AiChatWidget.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AiChatWidget.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(AiChatWidget, "+eNO/UxzXMaTnSNBfVZ1tqDMx+E=");
_c = AiChatWidget;
var _c;
__turbopack_context__.k.register(_c, "AiChatWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_0_s6pe9._.js.map