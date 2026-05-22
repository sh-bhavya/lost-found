
            function selectEmoji(emoji) {    
                const emojis = document.querySelectorAll('.emoji');
                emojis.forEach(e => e.classList.remove('selected'));
                emoji.classList.add('selected');
            }
    