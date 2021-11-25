package sample.spring.yse;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class RealGridController {
	@Autowired
	BookService bookService;
	
	@RequestMapping(value = "list2")
	public ModelAndView list(@RequestParam Map<String, Object> map) {
		String list = this.bookService.list2(map);
		ModelAndView mav = new ModelAndView();
		mav.addObject("data", list);
		if (map.containsKey("keyword")) {
			mav.addObject("keyword", map.get("keyword"));
		}
		mav.setViewName("/realgrid/list");
		return mav;
	}
	
	@RequestMapping(value = "load_csv")
	public String load_csv() {
		return "/realgrid/load_csv";
	}
	
	@RequestMapping(value = "group")
	public String group() {
		return "/realgrid/columnGrouping";
	}
	
	@RequestMapping(value = "merge")
	public String merge() {
		return "/realgrid/columnCellMerging";
	}
}
