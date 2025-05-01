/**
 * 自动计数器脚本
 * 用于自动计算论文和会议论文的数量，并设置相应的计数器值
 */
document.addEventListener('DOMContentLoaded', function() {
  // 计算期刊论文数量
  const journalPapers = document.querySelectorAll('jol li').length;
  // 计算会议论文数量
  const conferencePapers = document.querySelectorAll('confol confli').length;
  
  console.log(`自动计数：找到 ${journalPapers} 篇期刊论文和 ${conferencePapers} 篇会议论文`);
  
  // 设置计数器的值
  // 注意：计数器是从最大值开始递减的，所以我们需要设置为总数
  if (journalPapers > 0) {
    document.querySelector('jol').style.counterReset = `my-j-counter ${journalPapers + 1}`;
  }
  
  if (conferencePapers > 0) {
    document.querySelector('confol').style.counterReset = `my-c-counter ${conferencePapers + 1}`;
  }
});