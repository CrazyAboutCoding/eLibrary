const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

async function generateBooksData() {
  try {
    const books = await prisma.book.findMany();
    const booksData = JSON.stringify(books, null, 2);

    fs.writeFileSync('./src/lib/booksData.js', `export const books = ${booksData};`);
    console.log('Books data has been updated successfully.');
  } catch (error) {
    console.error('Error generating books data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

generateBooksData();