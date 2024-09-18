import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingTextProps {
  text: string; // متن اصلی برای تایپ
  typingSpeed?: number; // سرعت تایپ (اختیاری)
}

const TypingText: React.FC<TypingTextProps> = ({ text, typingSpeed = 100 }) => {
  const [displayText, setDisplayText] = useState<string>(''); // رشته‌ای که در صفحه نمایش داده می‌شود

  useEffect(() => {
    let currentIndex = 0;
    
    // اطمینان حاصل کنید که متن ورودی معتبر و با طول بیشتر از 0 است
    if (text && text.length > 0) {
      const typingInterval = setInterval(() => {
        // اضافه کردن کاراکتر به displayText بدون نشان دادن undefined
        setDisplayText((prev) => prev + (text[currentIndex] || ''));
        currentIndex++;
        
        // توقف تایمر بعد از تایپ کامل متن
        if (currentIndex === text.length) {
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval); // پاکسازی تایمر هنگام خروج از کامپوننت
    }
  }, [text, typingSpeed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ fontSize: '30px', fontFamily: 'title' }}
    >
      {displayText}
    </motion.div>
  );
};

export default TypingText;
