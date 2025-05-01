/**
 * 论文ID自动生成器
 * 用于自动为论文条目生成唯一的abstract和bibtex ID
 */
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有论文条目（包括confli和li标签）
    const paperEntries = document.querySelectorAll('confli, li');
    
    paperEntries.forEach((entry, index) => {
        // 为每个论文条目生成唯一的ID
        const paperId = `paper_${index + 1}`;
        
        // 更新abstract div的ID和链接
        const abstractDiv = entry.querySelector('div[id^="abstract"]');
        if (abstractDiv) {
            abstractDiv.id = `abstract_${paperId}`;
            const abstractLinks = entry.querySelectorAll('a[onclick*="abstract"]');
            abstractLinks.forEach(link => {
                link.setAttribute('onclick', `$('#abstract_${paperId}').slideToggle('fast');return false;`);
            });
        }
        
        // 更新bibtex div的ID和链接
        const bibtexDiv = entry.querySelector('div[id^="bibtex"]');
        if (bibtexDiv) {
            bibtexDiv.id = `bibtex_${paperId}`;
            const bibtexLinks = entry.querySelectorAll('a[onclick*="bibtex"]');
            bibtexLinks.forEach(link => {
                link.setAttribute('onclick', `$('#bibtex_${paperId}').slideToggle('fast');return false;`);
            });
        }
    });
}); 