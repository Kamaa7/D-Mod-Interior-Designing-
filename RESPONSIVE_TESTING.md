# Responsive Testing Guide

## Quick Start - Test Your Website

### 1. Browser DevTools (Easiest Method)
1. Open your website in Chrome/Edge
2. Press **F12** to open DevTools
3. Press **Ctrl+Shift+M** (Windows) or **Cmd+Shift+M** (Mac) to toggle Device Toolbar
4. Select different device presets from the dropdown

### 2. Test These Devices
- **iPhone SE** (375px width) - Smallest common mobile
- **iPhone 12/13** (390px width) - Standard mobile
- **iPhone 14 Pro Max** (430px width) - Large mobile
- **iPad** (768px width) - Tablet portrait
- **iPad Pro** (1024px width) - Tablet landscape
- **Desktop** (1280px+) - Standard desktop

### 3. What to Check

#### Mobile (< 640px)
- [ ] Text is readable (not too small)
- [ ] Buttons are touch-friendly (at least 44px)
- [ ] Navigation menu works (hamburger visible)
- [ ] No horizontal scrolling
- [ ] Images fit within container
- [ ] Forms are full-width and usable
- [ ] Floating buttons are visible and accessible
- [ ] Footer content is readable

#### Tablet (640px - 1024px)
- [ ] Grid layouts show 2 columns
- [ ] Text sizes are appropriate
- [ ] Spacing looks balanced
- [ ] Navigation is accessible
- [ ] Images scale properly

#### Desktop (> 1024px)
- [ ] Full layout displays correctly
- [ ] All sections are visible
- [ ] Hover effects work
- [ ] Multi-column layouts display properly

### 4. Test Rotation
- Rotate device to landscape mode
- Check if layout adapts properly
- Verify no content is cut off

### 5. Test Touch Interactions
- Enable touch simulation in DevTools
- Test button clicks
- Test form inputs
- Test navigation menu

## Online Testing Tools

1. **Responsively App**: https://responsively.app
   - Download and install
   - View multiple devices simultaneously
   - Free and open-source

2. **BrowserStack**: https://www.browserstack.com
   - Free trial available
   - Test on real devices
   - Test different browsers

3. **Am I Responsive**: https://ui.dev/amiresponsive
   - Quick preview
   - Just enter your URL
   - Shows 4 common device sizes

## Common Issues to Watch For

### Text Too Small
- Check if text scales down too much on mobile
- Ensure minimum font size is readable (at least 14px)

### Overflow Issues
- Check for horizontal scrolling
- Verify images don't overflow containers
- Test with longest text content

### Touch Targets
- Buttons should be at least 44x44px on mobile
- Spacing between clickable elements
- Forms should have adequate padding

### Layout Breaks
- Check grid layouts at each breakpoint
- Verify cards stack properly on mobile
- Test navigation menu on small screens

## Testing Your Current Site

Since your site is deployed on Vercel:
1. Open your Vercel URL
2. Use Chrome DevTools (F12)
3. Toggle device mode (Ctrl+Shift+M)
4. Test all breakpoints
5. Check each page (Home, About, Services, Portfolio, Blog, Contact)

## Quick Test Checklist

- [ ] Home page - Hero section looks good on mobile
- [ ] Home page - Services grid stacks properly
- [ ] Services page - All service cards are readable
- [ ] Portfolio page - Project images scale correctly
- [ ] Blog page - Articles are readable on mobile
- [ ] Contact page - Form is usable on mobile
- [ ] Header - Navigation works on all devices
- [ ] Footer - All links are clickable
- [ ] Floating buttons - Visible and accessible
- [ ] Scroll to top - Works on all pages

## Tips

1. **Start with mobile-first**: Test smallest screen first
2. **Test real content**: Use actual content, not placeholder text
3. **Test interactions**: Click buttons, fill forms, navigate
4. **Check images**: Ensure images load and scale properly
5. **Test performance**: Check page load time on mobile connection
6. **Test accessibility**: Use keyboard navigation on desktop

## Need Help?

If you find any responsive issues:
1. Note the device size where it occurs
2. Take a screenshot
3. Describe the problem
4. Check browser console for errors (F12 → Console tab)

