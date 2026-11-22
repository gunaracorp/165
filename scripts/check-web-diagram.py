#!/usr/bin/env python3
# Visual check: section Diagram Sanad pada situs 165 (dev server :3000)
import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={'width': 1440, 'height': 1000}, device_scale_factor=1.5)
        await page.goto('http://localhost:3000/#trust', wait_until='networkidle')
        await page.wait_for_timeout(2500)
        el = page.locator('section[aria-labelledby="sdiagram-h"]')
        cnt = await el.count()
        print('diagram section count:', cnt)
        if cnt:
            bbox = await el.bounding_box()
            print('bbox:', {k: round(v) for k, v in bbox.items()})
            await page.set_viewport_size({'width': 1440, 'height': min(int(bbox['height']) + 80, 3200)})
            await page.wait_for_timeout(600)
            await el.screenshot(path='/tmp/render/web-diagram.png')
            print('saved /tmp/render/web-diagram.png')
        else:
            await page.screenshot(path='/tmp/render/web-trust.png', full_page=False)
            print('fallback full viewport saved')
        await browser.close()

asyncio.run(main())
