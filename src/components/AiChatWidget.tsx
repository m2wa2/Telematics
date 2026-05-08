'use client';
import { useState } from 'react';
import styles from './chat.module.css';

export default function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string}[]>([
    { role: 'ai', content: 'Hi! Im the Matrix Telematics AI. How can I help you regarding TIMS/eTIMS or our ADAS solutions?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: 'user' as const, content: input }];
    setMessages(newMessages);
    setInput('');
    
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });
      const data = await res.json();
      setMessages([...newMessages, { role: 'ai', content: data.reply }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'ai', content: 'Im having trouble connecting right now.' }]);
    }
  };

  if (!isOpen) {
    return (
      <button className={styles.fab} onClick={() => setIsOpen(true)}>
        <span className={styles.fabIcon}>💬</span>
      </button>
    );
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <h4>Matrix AI Assistant</h4>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>✕</button>
      </div>
      <div className={styles.chatBody}>
        {messages.map((msg, i) => (
          <div key={i} className={`${styles.messageWrapper} ${msg.role === 'ai' ? styles.aiMessage : styles.userMessage}`}>
            <div className={styles.messageBubble}>{msg.content}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className={styles.chatFooter}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type your question..." 
          className={styles.chatInput}
        />
        <button type="submit" className={styles.sendBtn}>Send</button>
      </form>
    </div>
  );
}
