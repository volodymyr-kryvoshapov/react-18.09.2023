import {NavLink} from "react-router-dom";
import React from "react";
import {Typography} from "@mui/material";
import {useStyles} from "./styles";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import {LanguageList} from "../../constants"
import {useLang} from "../LanguageProvider";
import Button from "@mui/material/Button";

const menu = Object.entries(LanguageList).map(([label, lang]) => ({lang, label}));

export function Language() {
  const {setLang} = useLang();
  const {classes, cx} = useStyles();
  const isActiveClass = ({isActive}: any) => isActive ? cx(classes.toolbarLink, classes.active) : classes.toolbarLink;

  function onLangButtonClick(lang: LanguageList) {
    setLang(lang);
  }

  const menuItems = menu.map(({lang, label}) => (
    <Button onClick={() => onLangButtonClick(lang)}  variant="text">
      <Typography variant="body1" component="button">{label}</Typography>
    </Button>
  ));

  return (
    <Stack
      component="nav"
      direction="row"
      divider={<Divider orientation="vertical" flexItem/>}
      spacing={2}
      useFlexGap
      justifyContent="center"
    >
      {menuItems}
    </Stack>
  )
}