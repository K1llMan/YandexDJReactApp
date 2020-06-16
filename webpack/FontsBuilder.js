const path = require('path');
const glob = require('glob');
const fs = require('fs');

const IconFontBuildr = require('icon-font-buildr');
const nunjucks = require('nunjucks');

async function build(options) {
    if (!options.source)
        throw "No input directory";

    if (!options.output)
        throw "No output directory";    

    const builder = new IconFontBuildr({
        sources: [path.join(__dirname, options.source, '[icon].svg')],
        icons: glob.sync(path.join(__dirname, options.source, '*.svg')).map(el => path.parse(el).name),
        output: {
            fonts: path.join(__dirname, options.output),
            fontName: options.fontName,
            formats: options.formats
        }
    });

    await builder.build();

    if (!options.template)
        return;

    if (!options.outputCss)
        throw "No css output directory"; 
    
    const codepoints = builder.getIconsCodepoints(); // Get a map of icon names to codepoints, useful for generating HTML/CSS/SCSS etc.
    const ligatures = builder.getIconsLigatures(); // Get a map of icon names to ligatures, useful for generating HTML/CSS/SCSS etc.

    let templateOptions = {
        className: options.className || options.fontName,
        fontName: options.fontName,
        formats: options.formats,
        fontPath: options.fontPath,
        glyphs: Object.keys(codepoints).map((key) => { 
            return {
                unicode: codepoints[key],
                name: key
            }
        })
    }

    try {
        nunjucks.configure({ autoescape: true });

        fs.writeFile(path.resolve(__dirname, options.outputCss), nunjucks.render(path.resolve(__dirname, options.template), templateOptions), function(err) {
            if(err)
                return console.log(err);
        });
    }
    catch(e){
        console.log(e)
    }

}

exports.default = build;