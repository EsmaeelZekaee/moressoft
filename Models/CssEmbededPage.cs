using Piranha.AttributeBuilder;
using Piranha.Models;
using Piranha.Extend.Fields;
using Piranha.Extend;

namespace moressoft.Models;


[PageType(Title = "Css Embeded page")]
public class CssEmbededPage  : Page<CssEmbededPage>
{
  [Field]
  public TextField Css { get; set; }  
}