function getGrade (s1, s2, s3) {
    const average = (s1 + s2 + s3) / 3;
    console.log(average)
if(0 <= average && average < 60) {
    return 'F'
}else if (60 <= average && average < 70) {
    return 'D';
}else if (70 <= average && average < 80) {
    return 'C';
}else if (80 <= average && average < 90) {
    return 'B';
}else if (100 >= average && average > 90) {
    return 'A';
}
  }

  console.log(getGrade(10,10,10))