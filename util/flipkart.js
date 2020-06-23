const puppeteer = require('puppeteer');
const $ = require('cheerio');


    async function configureBrowser(link) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(link);
        return page;
    }
    
    async function getInfo(page) {
        await page.reload();
        let html = await page.evaluate(() => document.body.innerHTML);

        const product = {
            name : "",
            imageurl : "",
            rating : "",
            price : "",
            finalprice : ""
        }

        const finalprices = [];
        const titles = [];
        const images = [];
        const ratings = [];
        const prices = [];

        $('._2rQ-NK', html).each(function() {
            let price = $(this).text();
            finalprices.push(price);
        })

        $('._3wU53n',html).each(function() {
            let title = $(this).text();
            titles.push(title);
        })

        $('._30XEf0',html).each(function() {
            let image = $(this).attr('src');
            images.push(image);
        })

        $('.hGSR34',html).each(function() {
            let rating = $(this).text();
            ratings.push(rating);
        })
        
        product.name = titles[1];
        product.finalprice = finalprices[1];
        product.imageurl = images[1];
        product.rating = ratings[1];

        return product;
    }   
    
    async function getProduct(link){
        let page = await configureBrowser(link);
        let info = await getInfo(page)
        return info;
    }

exports.getprod = getProduct;
exports.baseURL = 'https://www.flipkart.com/search?';